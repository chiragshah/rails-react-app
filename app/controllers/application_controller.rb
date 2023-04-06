class ApplicationController < ActionController::Base
	respond_to :json
	include ActionController::MimeResponds
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!
end
