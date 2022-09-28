# fakebook-fullstack
 MERN-Stack minifacebook
 
# resolving git issue
    sudo chown -R "${USER:-$(id -un)}" .
    
# running backend
    sudo docker-compose up --build
    
# running front end
    npm run dev
    
# installing nodejs
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    source ~/.bashrc
    nvm list-remote
    nvm install lts/fermium
    
# installing needed libraries
    cd client
    npm i --legacy-peer-deps
