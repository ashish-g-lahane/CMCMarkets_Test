using System;
using System.Collections.Generic;
using System.Text;

namespace ProductsStoreLib.DomainObjects
{
    public class Product
    {   
        public Product()
        {

        }        
        
        public Product(int id, string name, string description, int price)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }
}
