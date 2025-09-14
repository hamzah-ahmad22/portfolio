---
sidebar_position: 2
---

# Integrating Panorama with Canvas

This guide shows you how to integrate Panorama with Canvas using LTI 1.3. If you have any questions regarding the steps in this process, please reach out to your dedicated client success manager.

---

:::info Prerequisite

- Admin access to Panorama and Canvas.
  :::

## Section 1: Download your JSON string

The JSON string is required to add Panorama as an LTI app in Canvas.

1. Log in to your Panorama account.

2. From the navbar, go to **Configurations > Integration Settings**.

3. From the **Select Integration** drop-down, select **LTI 1.3**.

4. Under **LTI App Placement**, select the Canvas locations where the Panorama LTI app should appear. You can select more than one.

   - Course Navigation
   - User Navigation
   - Global Navigation

5. Click **Download LTI 1.3 JSON** to obtain your Panorama JSON string.

---

## Section 2: Add Panorama as an LTI app in Canvas

The LTI app will allow your users to access Panorama from inside Canvas.

1. Log in to **Canvas** as an admin.

2. From the navbar, select **Developer Keys**.

3. Click **+ Developer Key > + LTI Key**.

4. In the **Method** drop-down, select **Paste JSON**.

5. Open the JSON file you downloaded earlier in a text editor (e.g. Notepad) and copy its content.

6. Paste the copied content into the **LTI 1.3 Configuration** field.

7. Enter a **Key Name** of your choice, then click **Save**.

8. Copy the **Client ID** listed under **Details**.

9. Ensure the new developer key is set to **ON** in the **State column**.

10. From the navbar, select **Settings**.

11. Select the **Apps** tab from the top row, and then select **View App Configurations**.

12. Click **+ App**.

13. From the **Configuration Type** drop-down menu, select **By Client ID**.

14. In the **Client ID** field, paste the client ID you copied in step 8, then click **Submit** to create the app.

15. Locate the newly created app, click the **Gear** icon, and then select **Deployment ID**. Copy the ID that appears.

---

## Section 3: Generate a Canvas access token

The token will be required to allow you to establish an API integration with Panorama so that data can be shared between the two.

1. In **Canvas**, log in as an admin.

2. From the sidebar, select **Account > Settings**.

3. Click **Approved Integrations > + New Access Token**.

4. Under **Purpose**, type **YuJa Panorama**.

5. Click **Generate Token**.

6. Copy the token value.

:::note Note
If your token contains a tilde (~), only copy the characters after the tilde.
:::

---

## Section 4: Link your Panorama instance to Canvas

With Panorama added as an app in Canvas, you now need to connect it to your Panorama instance.

1. Go to **Configurations > Integration Settings**.

2. From the **Select Integration** drop-down, choose **LTI 1.3**.

3. Enter the following details based on your Canvas environment:

   **Production Environment**

   - Client ID: from section 2 step 8.
   - Deployment ID: from section 2 step 15.
   - ISS: `https://canvas.instructure.com`
   - OIDC Endpoint: `https://canvas.instructure.com/api/lti/authorize_redirect`
   - JWKS Endpoint: `https://canvas.instructure.com/api/lti/security/jwks`

   **Test Environment**

   - Client ID: from section 2 step 8.
   - Deployment ID: from section 2 step 15.
   - ISS: `https://canvas.test.instructure.com`
   - OIDC Endpoint: `https://canvas.test.instructure.com/api/lti/authorize_redirect`
   - JWKS Endpoint: `https://canvas.test.instructure.com/api/lti/security/jwks`

   **Beta Environment**

   - Client ID: from section 2 step 8.
   - Deployment ID: from section 2 step 15.
   - ISS: `https://canvas.beta.instructure.com`
   - OIDC Endpoint: `https://canvas.beta.instructure.com/api/lti/authorize_redirect`
   - JWKS Endpoint: `https://canvas.beta.instructure.com/api/lti/security/jwks`

4. Click **Save Changes**.


> [View the guide on YuJa Support](https://support.yuja.com/hc/en-us/articles/7955689760023-Integrating-Panorama-into-Canvas-Using-LTI-1-3)
