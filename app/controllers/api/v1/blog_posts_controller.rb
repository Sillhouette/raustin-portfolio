module Api::V1
  class BlogPostsController < ApplicationController

    before_action :set_blog, only: [:show, :update, :destroy]
    before_action :check_permissions, only: [:create, :update, :destroy]

    def show
      return if @errors
        @post.content = ActionController::Base.helpers.simple_format(@post.content)
        render json: @post
    end

    def index
      @posts = BlogPost.all
      render json: @posts
    end

    def create
      return if @errors
      @post = BlogPost.create(blog_params)
      render json: @post
    end

    def update
      return if @errors
      @post.update(blog_params)
      @post.save
      render json: @post
    end

    def destroy
      return if @errors
      @post.destroy
      render json: @post
    end

    private

    def set_blog
      @post = BlogPost.find_by(id: params[:id])
      if !@post
        @errors = true
        render json: {
          status: 500,
          errors: ["Could not find blog with that id."]
        }
      end
    end

    def blog_params
      params.require(:blog_post).permit(:title, :content)
    end
  end
end
