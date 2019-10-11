using Microsoft.AspNetCore.Mvc;
using ProductsStoreLib.DomainObjects;
using ProductsStoreLib.Services;

namespace ProductsRestService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlaceOrderController : ControllerBase
    {
        private readonly IPlaceOrderService placeOrderService;

        public PlaceOrderController(IPlaceOrderService placeOrderService)
        {
            this.placeOrderService = placeOrderService;
        }

        [HttpPost]
        public bool Place(Product[] products)
        {
            return placeOrderService.PlaceOrder(products);
        }
        //public bool Place(bool b)
        //{
        //    return true;
        //}
    }
}