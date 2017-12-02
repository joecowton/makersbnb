require 'bcrypt'
class User
  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :email, Text, :required => true, :unique => true
  property :password_digest, Text

  attr_reader :password
  attr_accessor :password_confirmation

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.authenticate(email, password)
    user = first(email: email)
    if user && BCrypt::Password.new(user.password_digest) == password
      user
    else
      nil
    end
  end

  validates_confirmation_of :password
  validates_presence_of :email
  validates_format_of :email, as: :email_address

  has n, :favorites, through: Resource
  has n, :venues, through: Resource
  has n, :reservations, through: Resource
end
