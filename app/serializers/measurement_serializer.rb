class MeasurementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date_m, :units, :course_id, :user_id
  belongs_to :user
  belongs_to :course
end
