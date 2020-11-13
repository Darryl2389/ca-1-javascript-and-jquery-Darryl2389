$( document ).ready (function(){
  console.log("document ready");
  let products = [];
  let cart = [];

  //Adding item to cart
  function addItemToCart(products) {
    $('.show-cart').append(cart);
    console.log("Item added to cart");
    alert("item added to cart");
  }

  function clearCart(cart) {
    cart = [];
    console.log("cart cleared");
  }

  //When this button is clicked run the add item to cart function
  $('div.products').on('click', 'a.add-to-cart', function(e) {
    var name = ($(this).closest('div.card').data('name'));
    var price = ($(this).closest('div.card').data('price'));
    cart = [name, price , ' 1 '];
    addItemToCart();
  });

    $('.clear-cart').click(function(e) {
      clearCart();
  });

  // if this button is clicked display the products after the loader has finished
  $(".open-store").click(function(event){
    event.preventDefault();
    $(".open-store").remove();
    $('<div class="loader"></div>').appendTo('.products');

// Retrieving Data from JSON File
    jQuery.ajax({
      type:"GET",
      dataType:"json",
      async:"false",
      url:"https://api.npoint.io/20cc2b1939762a8eb8aa",
      success: function(data){
        products.push(data);
    $('.loader').remove();

    //displaying 6 products from the ajax request
    jQuery.each(data.products,function(i){
    //declaring the layout and attributes of the products table
    let productsDisplay = $('<div class="card" style="width: 18rem;"+ data-price="'+data.products[i].price+'" data-name="'+data.products[i].name+'" data-id="'+data.products[i].id+'" data-index="'+i+'">'+
                          '<img src="'+data.products[i].imageUrl+'" class="card-img-top" alt="...">'+
                          '<div class="card-body"><h5 class="card-title">'+data.products[i].name+'</h5></div>'+
                          '<a href="#" data-toggle="modal" class="add-to-cart btn btn-primary">'+data.products[i].price+'</a></div>');
                          // Loading products display
                          $('.products').append(productsDisplay);
          });
        }

      });
  });
});
