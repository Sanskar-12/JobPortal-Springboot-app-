package com.jobportal.Job.Portal.utility;

public class Data {
    public static String getHtmlCode(String otp,String name) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "  <meta charset=\"UTF-8\">\n" +
                "  <title>Your OTP Code</title>\n" +
                "  <style>\n" +
                "    body {\n" +
                "      font-family: Arial, sans-serif;\n" +
                "      background-color: #f4f4f7;\n" +
                "      margin: 0;\n" +
                "      padding: 20px;\n" +
                "    }\n" +
                "    .container {\n" +
                "      max-width: 600px;\n" +
                "      background-color: #ffffff;\n" +
                "      margin: auto;\n" +
                "      padding: 30px;\n" +
                "      border-radius: 8px;\n" +
                "      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n" +
                "    }\n" +
                "    .header {\n" +
                "      font-size: 24px;\n" +
                "      font-weight: bold;\n" +
                "      color: #333333;\n" +
                "      margin-bottom: 10px;\n" +
                "    }\n" +
                "    .otp {\n" +
                "      font-size: 36px;\n" +
                "      font-weight: bold;\n" +
                "      color: #4CAF50;\n" +
                "      margin: 20px 0;\n" +
                "    }\n" +
                "    .footer {\n" +
                "      font-size: 12px;\n" +
                "      color: #777777;\n" +
                "      margin-top: 30px;\n" +
                "    }\n" +
                "  </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "  <div class=\"container\">\n" +
                "    <div class=\"header\">Your One-Time Password (OTP)</div>\n" +
                "    <p>Hello, " + name +"</p>\n" +
                "    <p>Use the OTP below to complete your login process. This code is valid for the next 10 minutes:</p>\n" +
                "    <div class=\"otp\">"+ otp +"</div>\n" +
                "    <p>If you did not request this code, please ignore this email or contact support.</p>\n" +
                "    <p>Thank you,<br>The Security Team</p>\n" +
                "  </div>\n" +
                "</body>\n" +
                "</html>";
    }
}
