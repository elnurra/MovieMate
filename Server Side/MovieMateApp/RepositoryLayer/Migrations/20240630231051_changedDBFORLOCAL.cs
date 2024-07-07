using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RepositoryLayer.Migrations
{
    public partial class changedDBFORLOCAL : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Quality",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4552),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6095));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Property",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4970),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6537));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "PricingPlans",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4220),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5635));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Movie",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(3804),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5209));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Genre",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(3161),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(4493));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Feature",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(2772),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(3975));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Faq",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 58, DateTimeKind.Utc).AddTicks(9187),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(9921));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Contact",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 58, DateTimeKind.Utc).AddTicks(5471),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(5547));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Comment",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(5368),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6918));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Quality",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6095),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4552));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Property",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6537),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4970));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "PricingPlans",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5635),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(4220));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Movie",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(5209),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(3804));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Genre",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(4493),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(3161));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Feature",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(3975),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(2772));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Faq",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(9921),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 58, DateTimeKind.Utc).AddTicks(9187));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Contact",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 383, DateTimeKind.Utc).AddTicks(5547),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 58, DateTimeKind.Utc).AddTicks(5471));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Comment",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 6, 14, 22, 29, 46, 384, DateTimeKind.Utc).AddTicks(6918),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 6, 30, 23, 10, 51, 59, DateTimeKind.Utc).AddTicks(5368));
        }
    }
}
