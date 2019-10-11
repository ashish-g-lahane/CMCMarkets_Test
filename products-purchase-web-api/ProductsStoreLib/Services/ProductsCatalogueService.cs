using ProductsStoreLib.DomainObjects;
using System;

namespace ProductsStoreLib
{
    public class ProductsCatalogueService : IProductsCatalogueService
    {
        private static readonly Product[] Products = new[]
        {
            new Product(0, "MacAffee Internet Security 2019", "Provides internet security solutions for your laptop. Version 2019.", 20),
            new Product(1, "MacAffee Internet Security 2018", "Provides internet security solutions for your laptop. Version 2018.", 15),
            new Product(2, "Kasperkey 2019", "Secures your machine from viruses. Version 2019.", 22),
            new Product(3, "Kasperkey 2018", "Secures your machine from viruses. Version 2018.", 20),
            new Product(4, "BullGuard 2019", "Protect your laptop/machine with UK's top internet and software security solution. Version 2019.", 25),
            new Product(5, "BullGuard 2017", "Protect your laptop/machine with UK's top internet and software security solution. Version 2017.", 20),
            new Product(6, "BitDefender Internet Security 2019", "Provides internet security solutions for your laptop. Version 2019.", 30),
            new Product(7, "BitDefender Internet Security 2018", "Provides internet security solutions for your laptop. Version 2018.", 20),
        };

        public Product[] GetProducts()
        {
            return Products;
        }
    }
}
