	using System;
	using System.Collections.Generic;
	using UnityEngine;
	using UnityEngine.Purchasing;

public class Purchaser : MonoBehaviour, IStoreListener
{
		public static Purchaser Instance { set; get; }	

		private static IStoreController m_StoreController;          
		private static IExtensionProvider m_StoreExtensionProvider;

		public static string Produto25hc = "25hc";
		public static string Produto50hc = "50hc";
		public static string Produto100hc = "100hc";
		public static string Produto500hc = "500hc";
		public static string Produto1000hc = "1000hc";
		public static string Produto5shc = "5shc";
		public static string Produto10shc = "10shc";
		public static string Produto15shc = "15shc";
		public static string Produto50shc = "50shc";
		public static string Produto80shc = "80shc";
		
		private void Awake()
		{
			Instance = this;
		}

		private void Start()
		{
			if (m_StoreController == null)
			{
				InitializePurchasing();
			}
			
		}

		public void InitializePurchasing() 
		{
			if (IsInitialized())
			{
				return;
			}

			// Create a builder, first passing in a suite of Unity provided stores.
			var builder = ConfigurationBuilder.Instance(StandardPurchasingModule.Instance());

			builder.AddProduct(Produto25hc, ProductType.Consumable);
			builder.AddProduct(Produto50hc, ProductType.Consumable);
			builder.AddProduct(Produto100hc, ProductType.Consumable);
			builder.AddProduct(Produto500hc, ProductType.Consumable);
			builder.AddProduct(Produto1000hc, ProductType.Consumable);
			builder.AddProduct(Produto5shc, ProductType.Consumable);
			builder.AddProduct(Produto10shc, ProductType.Consumable);
			builder.AddProduct(Produto15shc, ProductType.Consumable);
			builder.AddProduct(Produto50shc, ProductType.Consumable);
			builder.AddProduct(Produto80shc, ProductType.Consumable);
			//builder.AddProduct(kProductIDNonConsumable, ProductType.NonConsumable);	

			UnityPurchasing.Initialize(this, builder);
		}


		private bool IsInitialized()
		{
			// Only say we are initialized if both the Purchasing references are set.
			return m_StoreController != null && m_StoreExtensionProvider != null;
		}


		public void Comprar25HC()
		{
			BuyProductID(Produto25hc);
		}

		public void Comprar50HC()
		{
			BuyProductID(Produto50hc);
		}

		public void Comprar100HC()
		{
			BuyProductID(Produto100hc);
		}

		public void Comprar500HC()
		{
			BuyProductID(Produto500hc);
		}

		public void Comprar1000HC()
		{
			BuyProductID(Produto1000hc);
		}

		public void Comprar5SHC()
		{
			BuyProductID(Produto5shc);
		}

		public void Comprar10SHC()
		{
			BuyProductID(Produto10shc);
		}

		public void Comprar15SHC()
		{
			BuyProductID(Produto15shc);
		}

		public void Comprar50SHC()
		{
			BuyProductID(Produto50shc);
		}

		public void Comprar80SHC()
		{
			BuyProductID(Produto80shc);
		}
		
			void BuyProductID(string productId)
			{
				// If Purchasing has been initialized ...
				if (IsInitialized())
				{
					// ... look up the Product reference with the general product identifier and the Purchasing 
					// system's products collection.
					Product product = m_StoreController.products.WithID(productId);

					// If the look up found a product for this device's store and that product is ready to be sold ... 
					if (product != null && product.availableToPurchase)
					{
						Debug.Log(string.Format("Purchasing product asychronously: '{0}'", product.definition.id));
						// ... buy the product. Expect a response either through ProcessPurchase or OnPurchaseFailed 
						// asynchronously.
						m_StoreController.InitiatePurchase(product);
					}
					// Otherwise ...
					else
					{
						// ... report the product look-up failure situation  
						Debug.Log("BuyProductID: FAIL. Not purchasing product, either is not found or is not available for purchase");
					}
				}
				// Otherwise ...
				else
				{
					// ... report the fact Purchasing has not succeeded initializing yet. Consider waiting longer or 
					// retrying initiailization.
					Debug.Log("BuyProductID FAIL. Not initialized.");
				}
			}


			// Restore purchases previously made by this customer. Some platforms automatically restore purchases, like Google. 
			// Apple currently requires explicit purchase restoration for IAP, conditionally displaying a password prompt.
			public void RestorePurchases()
			{
				// If Purchasing has not yet been set up ...
				if (!IsInitialized())
				{
					// ... report the situation and stop restoring. Consider either waiting longer, or retrying initialization.
					Debug.Log("RestorePurchases FAIL. Not initialized.");
					return;
				}

				// If we are running on an Apple device ... 
				if (Application.platform == RuntimePlatform.IPhonePlayer || 
					Application.platform == RuntimePlatform.OSXPlayer)
				{
					// ... begin restoring purchases
					Debug.Log("RestorePurchases started ...");

					// Fetch the Apple store-specific subsystem.
					var apple = m_StoreExtensionProvider.GetExtension<IAppleExtensions>();
					// Begin the asynchronous process of restoring purchases. Expect a confirmation response in 
					// the Action<bool> below, and ProcessPurchase if there are previously purchased products to restore.
					apple.RestoreTransactions((result) => {
						// The first phase of restoration. If no more responses are received on ProcessPurchase then 
						// no purchases are available to be restored.
						Debug.Log("RestorePurchases continuing: " + result + ". If no further messages, no purchases available to restore.");
					});
				}
				// Otherwise ...
				else
				{
					// We are not running on an Apple device. No work is necessary to restore purchases.
					Debug.Log("RestorePurchases FAIL. Not supported on this platform. Current = " + Application.platform);
				}
			}


			//  
			// --- IStoreListener
			//

			public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
			{
				// Purchasing has succeeded initializing. Collect our Purchasing references.
				Debug.Log("OnInitialized: PASS");

				// Overall Purchasing system, configured with products for this application.
				m_StoreController = controller;
				// Store specific subsystem, for accessing device-specific store features.
				m_StoreExtensionProvider = extensions;
			}


			public void OnInitializeFailed(InitializationFailureReason error)
			{
				// Purchasing set-up has not succeeded. Check error for reason. Consider sharing this reason with the user.
				Debug.Log("OnInitializeFailed InitializationFailureReason:" + error);
			}


			public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args) 
			{				
				if (String.Equals(args.purchasedProduct.definition.id, Produto25hc, StringComparison.Ordinal))
				{
					Perfil.HC += 25;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					//PostSave.SetActive(false);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou HC$ 25!!");
					//Valida25hc = true;
				}
				
				else if (String.Equals(args.purchasedProduct.definition.id, Produto50hc, StringComparison.Ordinal))
				{
					Perfil.HC += 50;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou HC$ 50!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto100hc, StringComparison.Ordinal))
				{
					Perfil.HC += 100;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou HC$ 100!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto500hc, StringComparison.Ordinal))
				{
					Perfil.HC += 500;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou HC$ 500!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto1000hc, StringComparison.Ordinal))
				{
					Perfil.HC += 1000;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou HC$ 1000!!");
					//Valida50hc = true;
				}


				else if (String.Equals(args.purchasedProduct.definition.id, Produto5shc, StringComparison.Ordinal))
				{
					Perfil.SHC += 5;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou SHC$ 5!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto10shc, StringComparison.Ordinal))
				{
					Perfil.SHC += 10;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou SHC$ 10!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto15shc, StringComparison.Ordinal))
				{
					Perfil.SHC += 15;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou SHC$ 15!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto50shc, StringComparison.Ordinal))
				{
					Perfil.SHC += 50;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou SHC$ 50!!");
					//Valida50hc = true;
				}

				else if (String.Equals(args.purchasedProduct.definition.id, Produto80shc, StringComparison.Ordinal))
				{
					Perfil.SHC += 80;
					//PlayerPrefs.SetInt("HC", Perfil.HC);
					Perfil.SaveCloud = true;
					Debug.Log("Parabéns!! Comprou SHC$ 80!!");
					//Valida50hc = true;
				}
			
				else 
				{
					Debug.Log(string.Format("ProcessPurchase: FAIL. Unrecognized product: '{0}'", args.purchasedProduct.definition.id));
				}
			
				//PostSave.SetActive(true);
				return PurchaseProcessingResult.Complete;
			}


			public void OnPurchaseFailed(Product product, PurchaseFailureReason failureReason)
			{
				// A product purchase attempt did not succeed. Check failureReason for more detail. Consider sharing 
				// this reason with the user to guide their troubleshooting actions.
				Debug.Log(string.Format("OnPurchaseFailed: FAIL. Product: '{0}', PurchaseFailureReason: {1}", product.definition.storeSpecificId, failureReason));
			}
}
