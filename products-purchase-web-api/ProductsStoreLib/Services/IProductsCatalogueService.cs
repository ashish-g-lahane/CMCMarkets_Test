using ProductsStoreLib.DomainObjects;

namespace ProductsStoreLib
{
    public interface IProductsCatalogueService
    {
        Product[] GetProducts();
    }
}