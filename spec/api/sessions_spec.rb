require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
    describe "SessionsController" do
        before(:each) do
            @username = "username"
            @password = "password"
            @email = "admin@site.com"
            @params = { 
                admin: {
                    username: @username,
                    password: @password
                } 
            }
        end

        describe "#create" do
            it "Returns sucessful response when creating a new session" do
                admin = Admin.create(username: @username, email: @email, password: @password)

                post :create, params: @params

                expect(response).to be_successful
                expect(response.body).to include(@username)
                expect(response.body).to include(@email)
            end

            it "Returns unsucessful response when failing to create a new session" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                @params[:admin][:password] = "incorrect_password"
                error = "Please verify credentials and try again, or create a new admin account"
                error_code = "401"

                post :create, params: @params

                expect(response.body).to include(error_code)
                expect(response.body).to include(error)
            end
        end

        describe "#is_logged_in?" do
            it "Returns sucessful response when login was sucessful" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                post :create, params: @params

                get :is_logged_in?

                expect(response).to be_successful
                expect(response.body).to include("true")
                expect(response.body).to include(@email)
                expect(response.body).to include(@username)
            end

            it "Returns unsucessful response when user is not logged in" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                error = "No such admin"

                get :is_logged_in?

                expect(response.body).to include("false")
                expect(response.body).to include(error)
            end
        end

        describe "#destroy" do
            it "Returns sucessful response when logout was sucessful" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                post :create, params: @params

                post :destroy

                expect(response).to be_successful
                expect(response.body).to include("true")
            end
        end
      end
end