require 'test_helper'

class McqControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mcq_index_url
    assert_response :success
  end

end
