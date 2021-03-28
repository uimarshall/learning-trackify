module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :authorize_request, only: :create
      skip_before_action :verify_authenticity_token, only: :create

      def create
        user = User.create!(user_params)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
        # render json: response, status: :ok
      end

      private

      def user_params
        params.permit(
          :name,
          :email,
          :password,
          :password_confirmation
        )
      end

      # def user_params
      #   params.require(:user).permit(
      #     :name,
      #     :email,
      #     :password,
      #     :password_confirmation
      #   )
      # end

      # def create
      #   user = User.new(user_params)
      #   if user.save
      #     # If a user is created, get us a token
      #     auth_token = AuthenticateUser.new(user.email, user.password).call
      #     response = { message: Message.account_created, auth_token: auth_token }
      #     render json: UserSerializer.new(response).serialized_json
      #     # render json: response, status: :ok
      #   else
      #     head(:unprocessable_entity)
      #   end
      # end

      # private

      # def user_params
      #   params.require(:user).permit(
      #     :name,
      #     :email,
      #     :password,
      #     :password_confirmation
      #   )
      # end
    end
  end
end
