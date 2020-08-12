class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include AbstractController::Helpers

  helper_method :login!, :logged_in?, :current_admin, :logout!

  # :nocov:
  def fallback_index_html
    respond_to do |format|
      format.html { render body: Rails.root.join('public/index.html').read }
    end
  end
  # :nocov:

  def login!
    session[:admin_id] = @admin.id
  end

  def logged_in?
    !!session[:admin_id]
  end

  def current_admin
    @current_admin ||= Admin.find(session[:admin_id]) if session[:admin_id]
  end

  def logout!
      session.clear
  end

  def check_permissions
    if !logged_in?
      @errors = true
      render json: {
        status: 500,
        errors: ["You must be logged in to do this."]
      }
    elsif current_admin.username != "Sillhouette"
      @errors = true
      render json: {
        status: 500,
        errors: ["Only Austin can do this."]
      }
    end
  end
end
