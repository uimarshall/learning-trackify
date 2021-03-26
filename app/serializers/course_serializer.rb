class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :desc
end
