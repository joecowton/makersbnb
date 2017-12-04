class Venue
  include DataMapper::Resource

  property :id, Serial
  property :title, Text, :unique => true
  property :address, Text
  property :city, Text
  property :price, Integer
  property :description, Text

  validates_presence_of :title, :address, :price


  def self.all_data
    data = []
    self.all.each do | venue |
      data <<  { id:          venue.id,
                 title:       venue.title,
                 address:     venue.address,
                 price:       venue.price,
                 pictures:    venue.pictures.first.path,
                 description: venue.description,
                 user:        venue.user.name
                }
    end
  data
  end

  has n, :pictures, through: Resource
  has n, :reservations, through: Resource
  has 1, :user, through: Resource
end
