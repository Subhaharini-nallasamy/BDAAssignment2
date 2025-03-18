import { response, Router } from "express";
import Customer from "../../models/Customers.js";
const router = Router();
router.post("/go", async (req, res) => {
  try {
    const customer = Customer(req.body);
    await customer.save();
    res.send("Data created sucessfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.send(customer);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.put("/case/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    res.send(customer); // Send the updated customer data
  } catch (error) {
    res.status(500).send("Error updating customer: " + error.message);
  }
});

router.delete("/case/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).send("Customer not found");
    }
    res.send(customer); // Send the deleted customer data
  } catch (error) {
    res.status(500).send("Error deleting customer: " + error.message);
  }
});

export default router;
