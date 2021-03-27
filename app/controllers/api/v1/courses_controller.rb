# module Api
#   module V1

#   end
# end

module Api
  module V1
    class CoursesController < ApplicationController
      before_action :set_course, only: %i[show update destroy]

      def index
        @courses = Course.all
        # json_response(@courses)
        render json: CourseSerializer.new(@courses).serialized_json
      end

      def my_courses
        @courses = current_user.courses
        # json_response(@courses)
        render json: CourseSerializer.new(@courses).serialized_json
      end

      def create
        @course = Course.create!(course_params)
        # json_response(@course, :created)
        render json: CourseSerializer.new(@courses, :created).serialized_json
      end

      def show
        # json_response(@course)
        render json: CourseSerializer.new(@courses).serialized_json
      end

      def update
        @course.update(course_params)
        head :no_content
      end

      def destroy
        @course.destroy
        head :no_content
      end

      private

      def course_params
        params.permit(:name, :desc)
      end

      def set_course
        @course = Course.find(params[:id])
      end
    end
  end
end
