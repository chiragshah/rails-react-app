class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]
  
  def index
    invitations = current_user.invitations
    render json: invitations
  end

  def show
    user = User.find_by_invitation_token(params[:id], true)
    if user
      render json: user
    else
      render json: {error: "Invalid token"}, status: :unprocessable_entity
    end
  end
  
  def invite
    user = User.invite!({ email: params[:email] }, current_user)
    render json: user
  end
end
