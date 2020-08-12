RSpec.describe Api::V1::BlogPostsController, type: :controller do
    describe "BlogPostsController" do
        before(:each) do
            username = "Sillhouette"
            password = "password"
            email = "admin@site.com"
            @admin = Admin.create(username: username, password: password, email: email)
            @content = "Some content"
            @title = "A title"
            @post = BlogPost.create(title: @title, content: @content)
        end

        describe "#show" do
            it "Shows a blog post" do
                get :show, params: { id: BlogPost.first.id }

                expect(response).to be_successful
                expect(response.body).to include(@title)
                expect(response.body).to include(@content)
            end

            it "Gives error if post not found" do
                error_code = "500"
                errors = "errors"
                get :show, params: { id: "bad_id" }

                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end
        end

        describe "#index" do
            it "Shows all blog posts" do
                another_title = "Title 2"
                more_content = "Some more content"
                BlogPost.create(title: another_title, content: more_content)
                
                get :index

                expect(response).to be_successful
                expect(response.body).to include(@title)
                expect(response.body).to include(@content)
                expect(response.body).to include(another_title)
                expect(response.body).to include(more_content)
            end
        end

        describe "#create" do
            it "can create a blog post" do
                another_title = "Title 2"
                more_content = "Some more content"
                session[:admin_id] = @admin.id
                params = {
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }

                post :create, params: params

                expect(response).to be_successful
                expect(response.body).to include(another_title)
                expect(response.body).to include(more_content)
            end

            it "receives an error if not logged in" do
                another_title = "Title 2"
                more_content = "Some more content"
                params = {
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }
                error_code = "500"
                errors = "You must be logged in to do this."

                post :create, params: params

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end

            it "receives an error if user is not 'Sillhouette'" do
                another_title = "Title 2"
                more_content = "Some more content"
                @user = Admin.create(username: "Something_else", password: "password", email: "something@something.com")
                session[:admin_id] = @user.id
                params = {
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }
                error_code = "500"
                errors = "Only Austin can do this."

                post :create, params: params

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end
        end

        describe "#destroy" do
            it "can update a blog post" do
                session[:admin_id] = @admin.id

                delete :destroy, params: { id: @post.id }

                expect(response).to be_successful
                expect(response.body).to include(@title)
                expect(response.body).to include(@content)
            end

            it "receives an error if not logged in" do
                error_code = "500"
                errors = "You must be logged in to do this."

                delete :destroy, params: { id: @post.id }

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end

            it "receives an error if user is not 'Sillhouette'" do
                @user = Admin.create(username: "Something_else", password: "password", email: "something@something.com")
                session[:admin_id] = @user.id
                error_code = "500"
                errors = "Only Austin can do this."

                delete :destroy, params: { id: @post.id }

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end
        end

        describe "#update" do
            it "can update a blog post" do
                another_title = "Title 2"
                more_content = "Some more content"
                session[:admin_id] = @admin.id
                params = {
                    id: @post.id,
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }

                patch :update, params: params

                expect(response).to be_successful
                expect(response.body).to include(another_title)
                expect(response.body).to include(more_content)
            end

            it "receives an error if not logged in" do
                another_title = "Title 2"
                more_content = "Some more content"
                params = {
                    id: @post.id,
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }
                error_code = "500"
                errors = "You must be logged in to do this."

                patch :update, params: params

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end

            it "receives an error if user is not 'Sillhouette'" do
                another_title = "Title 2"
                more_content = "Some more content"
                @user = Admin.create(username: "Something_else", password: "password", email: "something@something.com")
                session[:admin_id] = @user.id
                params = {
                    id: @post.id,
                    blog_post: {
                        title: another_title,
                        content: more_content
                    }
                }
                error_code = "500"
                errors = "Only Austin can do this."

                patch :update, params: params

                expect(response).to be_successful
                expect(response.body).to include(error_code)
                expect(response.body).to include(errors)
            end
        end
    end
end