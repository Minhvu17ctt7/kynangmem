const mongoose = require( 'mongoose');
const {Schema} = mongoose
/**
 * @param {import('mongoose').Connection} mongoose
 */
module.exports = mongoose.model(
    "profile",
    new Schema(
      {
        mssv: {
          type: Schema.Types.String,
          required: true,
          select: true,
          
        },
        name: {
          type: Schema.Types.String,
          required: true,
          select: true,
        },
        age: {
          type: Schema.Types.String,
          required: true,
          select: true,
        },
        email: {
          type: Schema.Types.String,
          required: true,
          select: true,
        },
        skype: {
          type: Schema.Types.String,
        
          select: true,
        },
        phone: {
          type: Schema.Types.String,
          required: true,
          select: true,
        },
        image: {
            type: Schema.Types.String,
            // required: true,
            select: true,
          },
        message: {
            type: Schema.Types.String,
            // required: true,
            select: true,
          },
          address: {
            type: Schema.Types.String,
            // required: true,
            select: true,
          },
        
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      }
    )
  );
