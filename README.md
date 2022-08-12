Table, like this one :

Methode | endpoint | description
| :--- | ---: | :---:
GET  | /product/ | List des produits
POST  | /product/ | Ajout de produit
DELETE  | 	/product/{:product_id} | Suppression de produit
PATCH  | /product/{:product_id} | Mise à jour de produit
GET  | /product/{:product_id}/variants/ | List des variantes d'un produit {product_id}
GET  | /product/{:product_id}/variants/{:variant_id} | List de la variante {variant_id} du produit {product_id}
GET  | /product/{:product_id} | List du produit {product_id}


GET	/product/{:product_id}	List du produit {product_id}