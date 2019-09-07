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
  end
end
