require 'rails_helper'

RSpec.describe Admin, type: :model do

  describe "Validations" do
    username = "username"
    password = "password"
    email = "email@admin.com"

    describe "Username" do
      invalid_username = "usr"
      invalid_username2 = "thisisaverylongpassword"
      unique_email = "another_email@admin.com"

      it 'Cannot be created without a username' do
        expected = false
        admin = Admin.new(password: password, email: email)
        
        actual = admin.save
    
        expect(actual).to be expected
      end
    
      it 'Cannot be created with a username that already exists' do
        expected = false
        admin = Admin.new(username: username, password: password, email: email)
        admin.save
        admin2 = Admin.new(username: username, password: password, email: unique_email)
    
        actual = admin2.save
    
        expect(actual).to be expected
      end

      it 'Cannot be created with a username that has a length of less than four' do
        expected = false
        admin = Admin.new(username: invalid_username, password: password, email: email)
        
        actual = admin.save
    
        expect(actual).to be expected
      end

      it 'Cannot be created with a username that has a length of larger than twenty' do
        expected = false
        admin = Admin.new(username: invalid_username2, password: password, email: email)
        
        actual = admin.save
    
        expect(actual).to be expected
      end
    end

    describe "Email" do
      unique_username = "another_admin"
      invalid_email = "someEmail"
      invalid_email2 = "someEmail@admin"
      invalid_email3 = "someEmail.com"

      it 'Cannot be created without an email' do
        expected = false
        admin = Admin.new(username: username, password: password)
        
        actual = admin.save
    
        expect(actual).to be expected
      end
    
      it 'Cannot be created with an email that already exists' do
        expected = false
        admin = Admin.new(username: username, password: password, email: email)
        admin.save
        admin2 = Admin.new(username: unique_username, password: password, email: email)
    
        actual = admin2.save
    
        expect(actual).to be expected
      end

      it 'Cannot be created with an invalid email' do
        expected = false
        admin = Admin.new(username: username, password: password, email: invalid_email)
        
        actual = admin.save
      
        expect(actual).to be expected
      end

      it 'Cannot be created without an .xxx at the end' do
        expected = false
        admin = Admin.new(username: username, password: password, email: invalid_email2)
        
        actual = admin.save
      
        expect(actual).to be expected
      end

      it 'Cannot be created without an @ in the middle' do
        expected = false
        admin = Admin.new(username: username, password: password, email: invalid_email3)
        
        actual = admin.save
      
        expect(actual).to be expected
      end
    end
    
    it 'Can be created with a valid username, email, and password' do
      expected = true
      admin = Admin.new
      admin.username = "username"
      admin.password = "password"
      admin.email = "email@admin.com"
        
      actual = admin.save
    
      expect(actual).to be expected
    end
  end
end
