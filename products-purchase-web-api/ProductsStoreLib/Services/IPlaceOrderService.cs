using ProductsStoreLib.DomainObjects;

namespace ProductsStoreLib.Services
{
    public interface IPlaceOrderService
    {
        bool PlaceOrder(Product[] products);
    }
}