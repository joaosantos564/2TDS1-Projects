//cada categorias possui vários produtos
//cada produto é pertencente a uma categoria

class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    //CRUD => Create, Read, Update, Delete
    //C => Create

    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);

    }
    getCategoryById(id){
        return  this.categories.find((category) => category.id == id);
     }

     //U => Update
     upadateCategory(id, name) {
        const category = this.getCategoryById(id);
        category.name = name;
     }

     //D=> Delete
     deleteCategory(id) {
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
     }
}




class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);
    
        this.products.push(product);
        category.products.push(product);

    }

    getProductById(id) {
        return this.products.find((product) => product.id ==id);
    }

    
}

const categoriesList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryNameInput").value;

    categoriesList.addCategory(categoryName);


    displayCategories();
    clearFields();

    console.log(categoriesList.categories);
    //console.log(categoriesList.categories);
}

function createProduct(){
    const productName1 = "Choco";
    const productPrice1 = 0.5;
    const productCategory1 = categoriesList.categories[0];

    const productName2 = "Sneakers";
    const productPrice2 = 100;
    const productCategory2 = categoriesList.categories[1];

    const productName3 = "Harry Potter";
    const productPrice3 = 50;
    const productCategory3 = categoriesList.categories[2];

    

    productList.addProduct(productName1, productPrice1, productCategory1);
    productList.addProduct(productName2, productPrice2, productCategory2);
    productList.addProduct(productName3, productPrice3, productCategory3);

   // console.log(productList.products);
}

function findCategory(id){
    const category = categoriesList.getCategoryById(id);

    console.log(category.name);
}

function editCategory(id, name) {
    categoriesList.upadateCategory(id, name);

    console.log(categoriesList.categories);
}

function deleteCategory(id){
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}

function findProduct(id) {
    const product = productList.getProductById(id);

    console.log(product.name);
}

function displayCategories(){
    let content = "";

    categoriesList.categories.forEach((category) => {
        content += `<li>${category.name}</li>`
    });


    document.getElementById("categoriesList").innerHTML = content;
}


function clearFields(){
    document.getElementById("categoryNameInput").value = "";
}