require 'rails_helper'

RSpec.describe "Tasks", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/tasks/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/tasks/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/tasks/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/tasks/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end