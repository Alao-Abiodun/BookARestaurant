const db = require('../db/index');

class RestaurantController {
  async addRestaurant(req, res) {
    const { name, location, price_range } = req.body;
    try {
      if (!name || !location || !price_range) {
        return res.status(401).json({
          status: 'Error',
          data: {
            message: 'Please fill in the required field',
          },
        });
      } else {
        const results = await db.query(
          'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
          [name, location, price_range]
        );
        return res.status(201).json({
          status: 'success',
          data: {
            message: 'Restaurant successfully created',
            result: results.rows[0],
          },
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: error,
        data: {
          message: 'Server Error',
        },
      });
    }
  }

  async getAllRestaurant(req, res) {
    try {
      const results = await db.query('SELECT * FROM restaurants');
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'Restaurants retrieve successfully',
          result: results.rows,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: error,
        data: {
          message: 'Server Error',
        },
      });
    }
  }

  async getARestaurant(req, res) {
    const { id } = req.params;
    try {
      const results = await db.query(
        'SELECT * FROM restaurants WHERE id = $1',
        [id]
      );
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'Single Restaurant retrieve successfully',
          result: results.rows[0],
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: error,
        data: {
          message: 'Server Error',
        },
      });
    }
  }

  async editARestaurant(req, res) {
    try {
      const { name, location, price_range } = req.body;
      const { id } = req.params;
      console.log({ name, location, price_range, id });
      const results = await db.query(
        'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
        [name, location, price_range, id]
      );
      console.log(results);
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'Restaurant Update successfully',
          result: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: error,
        data: {
          message: 'Server',
        },
      });
    }
  }

  async removeARestaurant(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).json({
          status: 'error',
          data: {
            message: 'There is such id that exist',
          },
        });
      }
      const results = await db.query(
        'DELETE FROM restaurants WHERE id = $1 RETURNING *',
        [id]
      );
      if (!results.rows[0]) {
        return res.status(401).json({
          status: 'error',
          data: {
            message: 'There is such id that exist',
          },
        });
      }
      console.log(results);
      // return res.status(401).json({
      //   status: 'success',
      //   data: {
      //     message: 'Restaurants deleted successfully',
      //   },
      // });
    } catch (error) {
      return res.status(500).json({
        status: '',
      });
    }
  }
}

module.exports = new RestaurantController();
