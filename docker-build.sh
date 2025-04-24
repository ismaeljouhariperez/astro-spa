#!/bin/bash

# Construit l'image Docker
echo "🚀 Construction de l'image Docker..."
docker build -t astro-spa:latest .

# Exécute le conteneur
echo "🌐 Démarrage du conteneur..."
docker run -p 8080:80 --name astro-spa-container -d astro-spa:latest

echo "✅ Application accessible sur http://localhost:8080"
echo "Pour arrêter le conteneur : docker stop astro-spa-container && docker rm astro-spa-container" 