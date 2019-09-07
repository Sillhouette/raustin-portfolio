class BlogPost < ApplicationRecord

  def self.set_images
    self.all.each do |post|
      post.save
    end
  end
end
