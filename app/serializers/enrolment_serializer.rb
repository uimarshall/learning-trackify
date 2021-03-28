class EnrolmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :course_id, :user_id, :created_at
  belongs_to :user
  belongs_to :course
end
