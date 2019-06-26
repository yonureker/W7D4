json.partial! "guest", guest: @guest

json.gifts do
  @gifts.each do |gift|
    json.extract! gift, :title, :description
  end
end