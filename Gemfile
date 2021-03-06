source 'https://rubygems.org'

gem 'rails', '~> 3.2.12'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
#group :assets do
#  gem 'sass-rails',   '~> 3.2.3'
#end
#
#platforms :ruby do
#  gem 'pg'
#end
#
#platforms :jruby do
#  gem 'activerecord-jdbcsqlite3-adapter'
#  gem 'trinidad'
#  gem 'jruby-openssl'
#end
#
#gem 'jquery-rails'
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'uglifier'
  gem 'compass-rails'
end

platforms :ruby do
  gem 'pg'
end

platforms :jruby do
  gem 'trinidad'
  gem 'jruby-openssl'
end

gem 'jquery-rails'
gem 'thin'

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug'

# Bundle the extra gems:
gem 'redcarpet', '~> 1.14.2' , :require => 'redcarpet'
gem 'ruby-openid', :require => 'openid'
gem 'rack-openid', :require => 'rack/openid'
gem 'aaronh-chronic', :require => 'chronic' # Fixes for 1.9.2
gem 'coderay'
gem 'formtastic'
gem 'formtastic-bootstrap'
gem 'will_paginate', '~> 3.0.2'
gem 'exception_notification', '~> 2.5.2'
gem 'open_id_authentication'

gem 'haml', '~> 3.1.7'
gem 'haml-rails', '~> 0.3.5'
gem 'skeleton-rails', :git => 'git://github.com/kristianmandrup/skeleton-rails.git'

gem 'google-analytics-rails'

gem 'hpricot'
gem 'ruby_parser'

# memcached
gem 'dalli'

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
group :test do
  gem 'database_cleaner'
  gem 'cucumber-rails',    :require => false
  gem 'cucumber-websteps', :require => false
  gem 'factory_girl'
  gem 'rspec'
  gem 'nokogiri', '~> 1.5.0'
  gem 'webrat'
end

group :development, :test do
  gem 'rspec-rails'
end
