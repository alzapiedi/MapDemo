http://googlemapdemo.herokuapp.com

This is barebones as it gets.  If you have a Mac it will be easy to set up locally.  If you have windows you're better off just trying to understand the code and playing with the one I hosted.

# Mac Config
First download PostgreSQL if you dont have it (http://postgresapp.com/) (free)

1. Open terminal

2. Navigate to working directory

3. `gem install bundler`

4. `bundle install` (will take a few minutes)

5. `rake db:create` (open up the postgres app you downloaded before this step)

6. `rake db:migrate`

7. `rails s`

8. Open browser go to http://localhost:3000


# Server side code
The server only has 3 endpoints, see routes (config/routes.rb)

All the root to statement does is tell the server where to send someone who requests the root path. The static_pages#root method does literally nothing, just needs to be there for Rails to work.  The HTML view being rendered is app/views/layouts/application.html

The other line in routes.rb establishes the other 2 endpoints, both have the same path (localhost:3000/pins), but one is a GET request to fetch all saved pins (index), one is a POST request to create a new one (create).

PinsController (app/controllers/pins_controller.rb) is what does all the work pulling pins from the DB and creating new ones.

# Client side code
There is one javascript file  (app/assets/javascripts/map.js) that handles the rendering of the map, and the server requests to fetch pins and create pins.

All of the google maps code can be found in the google maps API docs, and if you havent seen $.ajax before it is a function to make background HTTP requests and use the response to manipulate the page content without needing separate page loads.

Clicking the map creates a pin and saves it. Right now there is no way to delete


Let me know if you have any questions
