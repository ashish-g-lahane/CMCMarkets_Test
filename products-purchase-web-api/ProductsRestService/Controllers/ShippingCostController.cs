using Microsoft.AspNetCore.Mvc;
using ProductsStoreLib.Services;

namespace ProductsRestService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ShippingCostController : ControllerBase
    {
        private readonly IShippingCostService shippingCostService;

        public ShippingCostController(IShippingCostService shippingCostService)
        {
            this.shippingCostService = shippingCostService;
        }

        [HttpGet("{orderCost}")]
        public int GetShippingCost(int orderCost)
        {
            return shippingCostService.GetShippingCost(orderCost);
        }
    }
}