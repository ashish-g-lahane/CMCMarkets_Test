using Microsoft.AspNetCore.Mvc;
using ProductsStoreLib;
using ProductsStoreLib.DomainObjects;

namespace ProductsRestService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductCatalogueController : ControllerBase
    {
        private readonly IProductsCatalogueService productsCatalogueService;

        public ProductCatalogueController(IProductsCatalogueService productsCatalogueService)
        {
            this.productsCatalogueService = productsCatalogueService;
        }

        [HttpGet]
        public Product[] GetProducts()
        {
            return productsCatalogueService.GetProducts();
        }
    }
}