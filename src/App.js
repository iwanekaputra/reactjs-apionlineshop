import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/iwanekaputra/reactjs-apionlineshop">Github</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Products</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            
            <a class="nav-link" aria-current="page" href="#getAllProducts">
              <span data-feather="home" class="align-text-bottom"></span>
              Get All Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getSingleProduct">
              <span data-feather="file" class="align-text-bottom"></span>
              Get a single product
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getProductBySearch">
              <span data-feather="file" class="align-text-bottom"></span>
              Get Product by Search
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getProductsByCategory">
              <span data-feather="file" class="align-text-bottom"></span>
              Get Products by Category
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#addProduct">
              <span data-feather="file" class="align-text-bottom"></span>
              Add Product
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#updateProduct">
              <span data-feather="file" class="align-text-bottom"></span>
              Update product
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#deleteProduct">
              <span data-feather="file" class="align-text-bottom"></span>
              Delete product
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Categories</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllCategories">
              <span data-feather="file-text" class="align-text-bottom"></span>
                Get All Categories            
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#addCategory">
              <span data-feather="file-text" class="align-text-bottom"></span>
                Add category            
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#updateCategory">
              <span data-feather="file-text" class="align-text-bottom"></span>
                Update category            
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#deleteCategory">
              <span data-feather="file-text" class="align-text-bottom"></span>
                Delete category            
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Carts</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllCarts">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get all Carts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getSingleCart">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get a single Cart
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getCartsByUser">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get Cart By User
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#addCart">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Add cart
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#updateCart">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Update Cart
            </a>
          </li><li class="nav-item">
            <a class="nav-link" href="#deleteCart">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Delete a cart
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Orders</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllOrders">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get all Orders
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getOrdersByUser">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get Orders By User
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getOrderBySearch">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get Order By Search
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#addOrder">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Add Order
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Sizes</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllSizes">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get all Sizes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#addSize">
              <span data-feather="file-text" class="align-text-bottom"></span>
              add Size
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#updateSize">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Update Size
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#deleteSize">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Delete Size
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Status</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllStatus">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get all Status
            </a>
          </li>
          
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Users</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#getAllUsers">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get all Users
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#getSingleUser">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Get a single User
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Authentication</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#login">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#register">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Register
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#logout">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="row">
        <div class="col-lg-5">
          <h3 id='getAllProducts'>Get All Products</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="accordionExample">
            <div class="accordion-item mt-2">
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="card" style={{ height : "800px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>desctiprion : "...",</p>
                        <p>image : "...",</p>
                        <p>stock : "...",</p>
                        <p>discount : "...",</p>
                        <p>create_at : "...",</p>
                        <p>category : {"{..}"}</p>
                        <p>size : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>desctiprion : "...",</p>
                        <p>image : "...",</p>
                        <p>stock : "...",</p>
                        <p>discount : "...",</p>
                        <p>create_at : "...",</p>
                        <p>category : {"{..}"}</p>
                        <p>size : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getSingleProduct'>Get a single product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/hoodie-starcross')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#getProduct" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc2">
            <div class="accordion-item mt-2">
              <div id="getProduct" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc2">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>desctiprion : "...",</p>
                        <p>image : "...",</p>
                        <p>stock : "...",</p>
                        <p>discount : "...",</p>
                        <p>create_at : "...",</p>
                        <p>category : {"{..}"}</p>
                        <p>size : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getProductBySearch'>Get a product by search</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/products/search/hoodie starcross')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#searchProduct" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc3">
            <div class="accordion-item mt-2">
              <div id="searchProduct" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc3">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>desctiprion : "...",</p>
                        <p>image : "...",</p>
                        <p>stock : "...",</p>
                        <p>discount : "...",</p>
                        <p>create_at : "...",</p>
                        <p>category : {"{..}"}</p>
                        <p>size : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getProductsByCategory'>Get a product by category</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/products/category/Hoodie')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#productCategory" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc4">
            <div class="accordion-item mt-2">
              <div id="productCategory" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc4">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>desctiprion : "...",</p>
                        <p>image : "...",</p>
                        <p>stock : "...",</p>
                        <p>discount : "...",</p>
                        <p>create_at : "...",</p>
                        <p>category : {"{..}"}</p>
                        <p>size : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='addProduct'>Add New Product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "600px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/products', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>title: 'test product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>slug: 'test-product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>category: 'hoodie',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>description: 'test product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>stock: 20,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>price: '100000',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>image: 'tesproduct.jpg',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: {"[{...}]"}</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc5" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc5">
            <div class="accordion-item mt-2">
              <div id="accc5" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc5">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil tambah product",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='updateProduct'>Update Product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "600px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/products/hoodie-starcross', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "PUT",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>title: 'test product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>slug: 'test-product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>category: 'hoodie',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>description: 'test product',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>stock: 20,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>price: '100000',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>image: 'tesproduct.jpg',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: {"[{...}]"}</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc6" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc6">
            <div class="accordion-item mt-2">
              <div id="accc6" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc6">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil Update product",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='deleteProduct'>Delete Product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "200px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/products/hoodie-starcross', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "DELETE"</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc7" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc7">
            <div class="accordion-item mt-2">
              <div id="accc7" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc7">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil hapus product",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getAllCategories'>Get all categories</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
              <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/categories')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc8" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc8">
            <div class="accordion-item mt-2">
              <div id="accc8" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc8">
              <div class="card" style={{ height : "500px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 30,</p>
                        <p>title : "...",</p>
                        <p>slug : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='addCategory'>Add category</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "300px" }}>
            <div className='mt-3 mx-2'>
              <code>
              <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/categories')</span></h6>
              <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>title: 'test category',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc9" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc9">
            <div class="accordion-item mt-2">
              <div id="accc9" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc9">
              <div class="card" style={{ height : "500px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil tambah category",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='updateCategory'>Update Category</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "300px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/categories/1', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "PUT",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>title: 'update',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc10" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc10">
            <div class="accordion-item mt-2">
              <div id="accc10" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc10">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil Update category",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getAllCarts'>Get All carts</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc11" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc11">
            <div class="accordion-item mt-2">
              <div id="accc11" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc11">
              <div class="card" style={{ height : "700px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>size : "...",</p>
                        <p>total_price : "...",</p>
                        <p>quantity : "...",</p>
                        <p>created_at : "...",</p>
                        <p>product : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 20,</p>
                        <p>size : "...",</p>
                        <p>total_price : "...",</p>
                        <p>quantity : "...",</p>
                        <p>created_at : "...",</p>
                        <p>product : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getSingleCart'>Get a single cart</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts/1')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc12" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc12">
            <div class="accordion-item mt-2">
              <div id="accc12" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc12">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>size : "...",</p>
                        <p>total_price : "...",</p>
                        <p>quantity : "...",</p>
                        <p>created_at : "...",</p>
                        <p>product : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getCartsByUser'>Get cart by user</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts/user/user')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc13" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc13">
            <div class="accordion-item mt-2">
              <div id="accc13" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc13">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>size : "...",</p>
                        <p>total_price : "...",</p>
                        <p>quantity : "...",</p>
                        <p>created_at : "...",</p>
                        <p>product : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='addCart'>Add New cart</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "400px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>product_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>user_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>total_price: '100000',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>quantity: 10,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: "m",</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc14" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc14">
            <div class="accordion-item mt-2">
              <div id="accc14" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc14">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil tambah cart",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='updateCart'>Update cart</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "400px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts/1', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "PUT",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>product_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>user_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>total_price: '100000',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>quantity: 10,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: "m",</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc15" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc15">
            <div class="accordion-item mt-2">
              <div id="accc15" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc15">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil Update cart",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='deleteCart'>Delete carts</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "200px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/carts/1', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "DELETE"</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc16" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc16">
            <div class="accordion-item mt-2">
              <div id="accc16" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc16">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil hapus carts",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getAllOrders'>Get All Orders</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/orders')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc17" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc17">
            <div class="accordion-item mt-2">
              <div id="accc17" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc17">
              <div class="card" style={{ height : "900px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>no_order : "...",</p>
                        <p>total_pay : "...",</p>
                        <p>ongkir : "...",</p>
                        <p>payment : "...",</p>
                        <p>nohp : "...",</p>
                        <p>city : "...",</p>
                        <p>province : "...",</p>
                        <p>status : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                        <p>detail_order : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                      <p>id : 30,</p>
                        <p>no_order : "...",</p>
                        <p>total_pay : "...",</p>
                        <p>ongkir : "...",</p>
                        <p>payment : "...",</p>
                        <p>nohp : "...",</p>
                        <p>city : "...",</p>
                        <p>province : "...",</p>
                        <p>status : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                        <p>detail_order : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getOrdersByUser'>Get orders by user</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/orders/user/1')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc18" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc18">
            <div class="accordion-item mt-2">
              <div id="accc18" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc18">
              <div class="card" style={{ height : "500px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>no_order : "...",</p>
                        <p>total_pay : "...",</p>
                        <p>ongkir : "...",</p>
                        <p>payment : "...",</p>
                        <p>nohp : "...",</p>
                        <p>city : "...",</p>
                        <p>province : "...",</p>
                        <p>status : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                        <p>detail_order : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getOrderBySearch'>Get orders by search</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/orders/search/{"{no_order}"}')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc19" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc19">
            <div class="accordion-item mt-2">
              <div id="accc19" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc19">
              <div class="card" style={{ height : "500px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>no_order : "...",</p>
                        <p>total_pay : "...",</p>
                        <p>ongkir : "...",</p>
                        <p>payment : "...",</p>
                        <p>nohp : "...",</p>
                        <p>city : "...",</p>
                        <p>province : "...",</p>
                        <p>status : {"{..}"}</p>
                        <p>user : {"{..}"}</p>
                        <p>detail_order : {"[{...}]"}</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='addOrder'>Add Order</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "600px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/orders', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>user_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>status_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>cart_id: 1,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>nohp: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>city: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>province: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>address: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>total: 1000,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>ongkir: 20000,</h6>
                  <h6 style={{ paddingLeft: "90px" }}>payment: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>no_order: 09182,</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc20" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc20">
            <div class="accordion-item mt-2">
              <div id="accc20" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc20">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil tambah orderan",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getAllSizes'>Get All Sizes</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/size/dress')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc21" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc21">
            <div class="accordion-item mt-2">
              <div id="accc21" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc21">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>size : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                      <p>id : 10,</p>
                        <p>size : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='addSize'>Add Size</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "300px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/size/dress', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: '..',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc22" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc22">
            <div class="accordion-item mt-2">
              <div id="accc22" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc22">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil tambah size",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='updateSize'>Update Size</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "300px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/size/dress/{"{id}"}', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "PUT",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>size: '..',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc23" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc23">
            <div class="accordion-item mt-2">
              <div id="accc23" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc23">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil update size",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='deleteSize'>Delete Size</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "200px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/size/dress/{"{id}"}', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "DELETE"</h6>
                  
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc24" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc24">
            <div class="accordion-item mt-2">
              <div id="accc24" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc24">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>status : 200,</p>
                        <p>message : "Berhasil delete size",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getAllStatus'>Get all status</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
              <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/status')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc25" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc25">
            <div class="accordion-item mt-2">
              <div id="accc25" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc25">
              <div class="card" style={{ height : "400px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>name : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 3,</p>
                        <p>name : "...",</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id="getAllUsers">Get all Users</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
              <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/users')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc26" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc26">
            <div class="accordion-item mt-2">
              <div id="accc26" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc26">
              <div class="card" style={{ height : "600px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>name : "...",</p>
                        <p>email : "...",</p>
                        <p>profile : "...",</p>
                        <p>role_id : {"{..}"},</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>name : "...",</p>
                        <p>email : "...",</p>
                        <p>profile : "...",</p>
                        <p>role_id : {"{..}"},</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='getSingleUser'>Get a single User</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "150px" }}>
            <div className='mt-3 mx-2'>
              <code>
              <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/user')</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc27" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc27">
            <div class="accordion-item mt-2">
              <div id="accc27" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc27">
              <div class="card" style={{ height : "300px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>id : 1,</p>
                        <p>name : "...",</p>
                        <p>email : "...",</p>
                        <p>profile : "...",</p>
                        <p>role_id : {"{..}"},</p>
                        <p>create_at : "...",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='login'>Login</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "400px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/login', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>email: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>password: '..',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc28" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc28">
            <div class="accordion-item mt-2">
              <div id="accc28" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc28">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>message : 'hai user, welcome to home',</p>
                        <p>access_token : "eJncnhnhSr31ZMXARpP3hbhutavvf7Kqb8a2HpWU",</p>
                        <p>token_type : "Bearer",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='register'>Register</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "400px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/register', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>name: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>email: '..',</h6>
                  <h6 style={{ paddingLeft: "90px" }}>password: '..',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc29" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc29">
            <div class="accordion-item mt-2">
              <div id="accc29" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc29">
              <div class="card" style={{ height : "200px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>data : {"{name : '..', email : '..', password : '..'}"}</p>
                        <p>access_token : "eJncnhnhSr31ZMXARpP3hbhutavvf7Kqb8a2HpWU",</p>
                        <p>token_type : "Bearer",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="row mt-5">
        <div class="col-lg-5">
          <h3 id='logout'>Logout</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card" style={{ height : "350px" }}>
            <div className='mt-3 mx-2'>
              <code>
                <h6>fetch(<span class="text-info">'https://apionlineshop.000webhostapp.com/api/logout', {"{"}</span></h6>
                <div style={{ paddingLeft: "50px" }}>
                  <h6>method : "POST",</h6>
                  <h6>body : JSON.stringify(</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"{"}</h6>
                  <h6 style={{ paddingLeft: "90px" }}>token: '..',</h6>
                  <h6 style={{ paddingLeft: "70px" }}>{"}"}</h6>
                  <h6 style={{ paddingLeft: "50px" }}>)</h6>
                  <h6>{"})"}</h6>
                  <h6>.then(res=>res.json())</h6>
                  <h6>.then(json=>console.log(json))</h6>
                </div>
              </code>
            </div>
          </div>

          <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#accc30" aria-expanded="true" aria-controls="collapseOne">
                  Show Output
          </button>
          <div class="" id="acc30">
            <div class="accordion-item mt-2">
              <div id="accc30" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#acc30">
              <div class="card" style={{ height : "150px" }}>
                <div className='mt-3 mx-2'>
                  <code>
                    <h5><span class="text-info"></span></h5>
                    <div style={{ paddingLeft: "50px" }}>
                      <p>{"{"}</p>
                      <p style={{ paddingLeft : "40px" }}>
                        <p>message : "You have successfully logged out and the token was successfully deleted",</p>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </code>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</>
  );
}

export default App;
