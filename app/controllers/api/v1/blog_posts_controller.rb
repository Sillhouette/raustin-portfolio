module Api::V1
  class BlogPostsController < ApplicationController
    def show
      @post = BlogPost.find(params[:id])
      @post.post = ActionController::Base.helpers.simple_format(@post.post)
      render json: @post
    end

    def index
      @posts = BlogPost.all
      render json: @posts
    end

    def create
      render json: {"error": "Blog post creation has been disabled."}
    end

    def update
      render json: {"error": "Blog post updates have been disabled."}
    end

    def delete
      render json: {"error": "Blog post deletion has been disabled."}
    end
  end
end
