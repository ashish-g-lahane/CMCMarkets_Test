namespace ProductsStoreLib.Services
{
    public interface IShippingCostService
    {
        int GetShippingCost(int orderCost);
    }
}