class PostsController < ApplicationController
  def index
    @tag = params[:tag]
    @posts = Post.find_recent(:tag => @tag)

    raise(ActiveRecord::RecordNotFound) if @posts.empty?

    respond_to do |format|
      format.html
      format.atom { render :layout => false }
    end
  end

  def show
    @post = Post.find_by_permalink(*[:year, :month, :day, :slug].collect {|x| params[x] })
    @comment = Comment.new
  end
end
