// Retrieving Data from JSON File
  jQuery.ajax({
    type:"GET",
    dataType:"json",
    data:{"param":"value"},
    url:"https://api.npoint.io/20cc2b1939762a8eb8aa",
    success: function(data){
      console.log(data);

  $.each(data.products,function(i){

  for(var i in data.products){
  //declaring the layout and attributes of the products table
  let productsTable = $('<div class="card" style="width: 18rem;">'+
                        '<img src="'+data.products[i].imageUrl+'" class="card-img-top" alt="...">'+
                        '<div class="card-body"><h5 class="card-title">'+data.products[i].name+'</h5></div>'+
                        '<a href="#" data-toggle="modal" class="add-to-cart btn btn-primary">'+data.products[i].price+'</a></div>');

                      // on mouse enter change opacity and add border
                      $("img").on('mouseenter' , function(e){
                        $(this).css({
                          "border" : "thick solid blue",
                          "opacity": "0.25"
                        });
                      })

                      //on mouse out remove opacity and remove border from mouseenter
                      $("img").on('mouseout' , function(e){
                        $(this).css({
                          "border" : "",
                          "opacity": ""
                        });
                      })

                      $('.products').append(productsTable);
                    }


// adding a dismissable alert to the navbar when an item is added to the cart modal
 let addToCartAlert  = $('<div class="alert alert-success float-left alert-dismissible fade show" role="alert">'
                        +'<strong>'+data.products[i].name +'</strong>'+ 'Has been added to your cart.'
                        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                        +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                        +'</div>');


// adding the chosen item to the cart modal
let addItemToCart = $('<table class="show-cart table" id="show-product">'
                    + '<th>'+'Product'+'</th>'
                    + '<th>'+'Price'+'</th>'
                    + '<th>'+'Qty'+'</th>'
                    + '<tr>'
                    + '<td>'+'<img src="'+data.products[i].imageUrl+'" class="img-thumbnail" width=75px; height=75px; alt="...">'+ data.products[i].name + '</td>'
                    + '<td>' + data.products[i].price +'</td>'
                    + '</tr>'
                    + '</table>');

function removeAllItemsFromCart(){
    addItemToCart.remove();
}

let clearCartAlert  = $('<div class="alert alert-warning float-left alert-dismissible fade show" role="alert">'
                       +'<strong>'+data.products[i].name +'</strong>'+ 'Has been removed from the cart.'
                       +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                       +'<span aria-hidden="true">&times;</span>'
                       +'</button>'
                       +'</div>');


                    if ($('#modal-body').is(':empty')){
                    ('.modal-body').append('<h4>' + 'Your Cart is Empty' + '</h4>');
                    }
                  // event handler if button is clicked append these items
                  $(".add-to-cart").click(function(event){
                    event.preventDefault();
                    $('.navbar').append(addToCartAlert);
                    $('.modal-body').append(addItemToCart);

                });
                  $(".clear-cart").click(function(event){
                    event.preventDefault();
                    removeAllItemsFromCart();
                    $('.navbar').append(clearCartAlert);
                })

          // <div>Total price: €<span class="total-cart"></span></div>

          var name = data.products[i].name;
          var price = data.products[i].price;
          // addItemToCart(name,price,1);
          // displayCart();

      });
    }
  });
