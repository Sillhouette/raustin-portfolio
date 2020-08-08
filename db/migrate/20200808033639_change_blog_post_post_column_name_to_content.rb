class ChangeBlogPostPostColumnNameToContent < ActiveRecord::Migration[5.2]
  def change
    rename_column :blog_posts, :post, :content
  end
end
