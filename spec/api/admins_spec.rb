require 'rails_helper'

RSpec.describe AdminsController, type: :controller do
    describe "AdminsController" do
        before(:each) do
            @username = "username"
            @password = "password"
            @email = "admin@site.com"
            @params = { 
                admin: {
                    username: @username,
                    email: @email,
                    password: @password,
                    password_confirmation: @password,
                } 
            }
        end

        describe "#create" do
            it "Returns sucessful response when creating a new admin" do

                post :create, params: @params

                expect(response).to be_successful
                expect(response.body).to include(@username)
                expect(response.body).to include(@email)
            end

            it "Returns errors when creation of admin fails" do
                errors = "errors"
                error_code = "500"
                
                @params[:admin][:username] = ""

                post :create, params: @params

                expect(response.body).to include(errors)
                expect(response.body).to include(error_code)
            end
        end

        describe "#show" do
            it "Returns sucessful response when showing an admin" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                params = { id: admin.id }

                get :show, params: params

                expect(response).to be_successful
                expect(response.body).to include(@username)
                expect(response.body).to include(@email)
            end

            it "Returns errors when admin isnt found" do
                admin = Admin.create(username: @username, email: @email, password: @password)
                errors = "errors"
                error_code = "500"
                params = { id: "broken_id" }

                get :show, params: params

                expect(response.body).to include(errors)
                expect(response.body).to include(error_code)
            end
        end
    end
end