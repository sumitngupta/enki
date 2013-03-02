class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    @tag = params[:tag]
    @posts = Post.find_recent(:tag => @tag, :include => :tags)

    respond_to do |format|
      format.html
      format.atom { render :layout => false }
    end
  end

  def show
    @post = Post.find_by_permalink(*([:year, :month, :day, :slug].collect {|x| params[x] } << {:include => [:tags]}))
  end

  def record_not_found
    flash[:notice] = "That post was not found"
    redirect_to root_path
  end
end
