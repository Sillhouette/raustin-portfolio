require 'rails_helper'

describe BlogPost, type: :model do
  it 'Cannot be created without a title' do
    expected = false
    blog = BlogPost.new
    blog.content = "This is some content"
    
    actual = blog.save

    expect(actual).to be expected
  end

  it 'Cannot be created without content' do
    expected = false
    blog = BlogPost.new
    blog.title = "This is a title"
    
    actual = blog.save

    expect(actual).to be expected
  end

  it 'Can be created with title and content' do
    expected = true
    blog = BlogPost.new
    blog.title = "This is a title"
    blog.content = "This is some content"
    
    actual = blog.save

    expect(actual).to be expected
  end
end
