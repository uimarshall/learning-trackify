module Api
  module V1
    class UserCoursesController < ApplicationController
      def create
        @course = Course.find(user_course_params[:course_id])
        current_user.courses << @course unless current_user.courses.include?(@course)
        json_response(@course)
      end

      def destroy
        @course = Course.find(params[:course_id])
        current_user.courses.delete(@course)
        head :no_content
      end

      private

      def user_course_params
        params.permit(:course_id)
      end
    end
  end
end
