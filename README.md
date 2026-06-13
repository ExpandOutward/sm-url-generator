# SM URL Generator
I created the SM URL Generator during my 10+ year career at SAP Ariba, where I worked as a Senior Support Engineer. The application is designed to create web jumper URLs based on user input.

# How It Works
The application is broken down into two URL types.

## SM API URL Generator
Populates a URL based on a customer's realm (site) name, the Supplier's SM Vendor ID, and the Data Center where the realm is hosted. This tool is only applicable for SAP Ariba Supprot Engineers as it populates a URL to be used for an internal tool. The internal tool generates a URL that can be used to push an integration paylaod for a single supplier in the event that one was not generated and the "sync now" button is missing in the Supplier's ERP Data tab.

## Advanced View
Populates a URL that can be used to access the Advanced View off any SLP Project. This tool can also be used to access projects that have not yet indexed either due to a delay or an error, and are therefore not searchable through the User Interface. In order for these URLs to work, the user must already be logged into their SAP Ariba site or the generated URL will route to the log in screen instead of the project.

# Disclaimer
I am no longer an employee of SAP Ariba and I cannot offer support on the product. This application is intended for use by my former colleagues rather than public use and to showcase my skills for future employment. Therefore, I cannot offer additional context or answer questions regarding this tool in regard to specific use cases or application. 
