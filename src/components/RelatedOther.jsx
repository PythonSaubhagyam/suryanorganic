import { useState, useEffect } from "react";
import { Toast, useMediaQuery, useToast } from "@chakra-ui/react";
import client from "../setup/axiosClient";
import ProductListSection from "./ProductListSection";
import { useParams } from "react-router-dom";
const RelatedOther = ({ recentlyViewedProducts }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [otherProducts, setOtherProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 1024px)");
    const { productId } = useParams();
    const toast = useToast();
    const getProductsList = async () => {
        if (!productId) return;

        try {
            setLoading(true);
            const response = await client.get(`/api/related-other-products/`, {
                params: { product_id: productId }
            });


            if (response.data?.status) {
                const { related_product_details, other_product_details, product_details } =
                    response.data.RelatedOtherProducts[0] || {};
                setProducts(product_details || 0)
                setRelatedProducts(related_product_details || []);
                setOtherProducts(other_product_details || []);

            } else {
                throw new Error("Invalid API response structure");
            }
        } catch (error) {
            console.error("Error fetching related products:", error.response?.data || error);

            toast({
                title: "Error fetching related products",
                description: error.response?.data?.message || "Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
        } finally {
            setLoading(false); // Stop loading after fetch
        }
    };
    useEffect(() => {
        getProductsList();
        // getProducts();
    }, [productId]);

    const { productName } = useParams();
    const mainBrand = productName?.split("-")[0];
    useEffect(() => {
        if (!productName) {
            console.error("No product name available");
        } else {
            const otherProductss = otherProducts.filter(p => !p.name.startsWith(mainBrand));
            const mainBrandProducts = otherProducts.filter(p => p.name.startsWith(mainBrand));
            setSortedProducts([...otherProductss, ...mainBrandProducts]);
        }
    }, [sortedProducts])

    return (
        <div>
            {loading && <p>Loading products...</p>}

            {relatedProducts &&
                relatedProducts?.length > 0 && (
                    <ProductListSection
                        title="Related Products"
                        products={relatedProducts}
                        loading={loading}
                        justify="center"
                        fontSize={{ base: "sm", lg: "md" }}
                        type={"carousal"}
                    />
                )}
            {sortedProducts &&
                sortedProducts?.length > 0 && (
                    <ProductListSection
                        title="Other Products"
                        products={sortedProducts}
                        justify="center"
                        loading={loading}
                        fontSize={{ base: "sm", lg: "md" }}
                        type={"carousal"}
                    />
                )}

            {recentlyViewedProducts?.length > 0 && (
                <ProductListSection
                    title="Recently Viewed Products"
                    products={recentlyViewedProducts}
                    justify="center"
                    loading={loading}
                    fontSize={{ base: "sm", lg: "md" }}
                    type={isMobile && "carousal"}
                />
            )}


        </div>
    );
};

export default RelatedOther;
