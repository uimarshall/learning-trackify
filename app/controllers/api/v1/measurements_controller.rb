module Api
  module V1
    class MeasurementsController < ApplicationController
      before_action :set_course, except: %i[my_measurements]
      before_action :set_course_measurement, only: %i[show update destroy]
      def index
        @measurements = Measurement
          .where(course_id: @course.id, user_id: current_user.id).last_week.order(id: :desc)
        render json: MeasurementSerializer.new(@measurements).serialized_json
      end

      def my_measurements
        measurements = current_user.measurements.date_m(params[:date] || '')
        render json: MeasurementSerializer.new(measurements).serialized_json
      end

      # Show single measurement

      def show
        render json: MeasurementSerializer.new(@measurement).serialized_json
      end

      def create
        p params
        params = measurement_params
        params['user_id'] = current_user.id
        measure = @course.measurements.new(params)
        if measure.save
          render json: MeasurementSerializer.new(measure).serialized_json

        else
          render json: { error: measure.errors.messages }, status: 422

        end
        render json: MeasurementSerializer.new(measure, :created).serialized_json
      end

      def update
        # airline = Airline.find_by(slug: params[:slug])
        if @measurement.update(measurement_params)
          render json: MeasurementSerializer.new(@measurement).serialized_json

        else
          render json: { error: @measurement.errors.messages }, status: 422

        end
      end

      def destroy
        if @measurement.destroy
          head :no_content
        else
          render json: { error: @measurement.errors.messages }, status: 422

        end
      end

      private

      def measurement_params
        params.require(:measurement).permit(:units, :date_m)
      end

      def set_course
        @course = Course.find(params[:course_id])
      end

      def set_course_measurement
        @measurement = @course.measurements.find_by!(id: params[:id]) if @course
      end
    end
  end
end
