##### nextgrowth_test

## 1. Download or Clone this repo:

#### Download:

```git clone https://github.com/jnoman/nextgrowth_test.git```


##  Install dependencies:
Run:

```npm install```

module produit

```
{

  "reference": "String",

  "name": "String",

  "description": "String",

  "image": "String",

  "variants": [

    {

      "sku": "String",

      "specification": "String",

      "price": "Number"

    }

  ]

}
```

module utilisateur

```
{

  "firstName": "String",

  "lastName": "String",

  "email": "String",

  "password": "String",

}
```



```
les methode :
```

Methode | endpoint | description
| :--- | ---: | :---:
POST  | /login | login utilisateur
POST  | /inscription/ | inscription utilisateur
GET  | /product/ | List des produits
POST  | /product/ | Ajout de produit
DELETE  | 	/product/{:product_id} | Suppression de produit
PATCH  | /product/{:product_id} | Mise à jour de produit
GET  | /product/{:product_id}/variants/ | List des variantes d'un produit {product_id}
GET  | /product/{:product_id}/variants/{:variant_id} | List de la variante {variant_id} du produit {product_id}
GET  | /product/{:product_id} | List du produit {product_id}


