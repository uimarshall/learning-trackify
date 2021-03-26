module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :authorize_request, only: :create

      def create
        user = User.new(user_params)
        if new_user.save
          # If a user is created, get us a token
          auth_token = AuthenticateUser.new(user.email, user.password).call
          time = Time.now + 24.hours.to_i
          response = { message: Message.account_created, auth_token: auth_token, time: time }
          render json: UserSerializer.new(response).serialized_json
        else
          head(:unprocessable_entity)
        end
      end

      private

      def user_params
        params.require(:user).permit(
          :name,
          :email,
          :password,
          :password_confirmation
        )
      end
    end
  end
end
